import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Project from '@/lib/models/Project';

export async function GET(request: NextRequest) {
  try {
    if (!process.env.MONGODB_URI) {
      return NextResponse.json([], { status: 200 });
    }
    await dbConnect();

    const searchParams = request.nextUrl.searchParams;
    const ongoing = searchParams.get('ongoing');

    let query = {};
    if (ongoing === 'true') {
      query = { ongoing: true };
    } else if (ongoing === 'false') {
      query = { ongoing: false };
    }

    const projects = await Project.find(query).sort({ createdAt: -1 });

    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();

    const project = new Project(body);
    const savedProject = await project.save();

    return NextResponse.json(savedProject, { status: 201 });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}
