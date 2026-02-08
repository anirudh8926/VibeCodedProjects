import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Skill from '@/lib/models/Skill';

export async function GET(request: NextRequest) {
  try {
    if (!process.env.MONGODB_URI) {
      return NextResponse.json([], { status: 200 });
    }
    await dbConnect();

    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');

    let query = {};
    if (category) {
      query = { category };
    }

    const skills = await Skill.find(query).sort({ category: 1 });

    return NextResponse.json(skills, { status: 200 });
  } catch (error) {
    console.error('Error fetching skills:', error);
    return NextResponse.json({ error: 'Failed to fetch skills' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();

    const skill = new Skill(body);
    const savedSkill = await skill.save();

    return NextResponse.json(savedSkill, { status: 201 });
  } catch (error) {
    console.error('Error creating skill:', error);
    return NextResponse.json({ error: 'Failed to create skill' }, { status: 500 });
  }
}
