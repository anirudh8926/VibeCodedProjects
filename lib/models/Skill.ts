import mongoose, { Schema, Document } from 'mongoose';

export interface ISkill extends Document {
  _id: string;
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'languages';
  proficiency: 'beginner' | 'intermediate' | 'advanced';
  icon?: string;
  createdAt: Date;
  updatedAt: Date;
}

const SkillSchema = new Schema<ISkill>(
  {
    name: {
      type: String,
      required: [true, 'Please provide a skill name'],
      maxlength: [50, 'Name cannot be more than 50 characters'],
    },
    category: {
      type: String,
      enum: ['frontend', 'backend', 'tools', 'languages'],
      required: [true, 'Please provide a skill category'],
    },
    proficiency: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      default: 'intermediate',
    },
    icon: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Skill || mongoose.model<ISkill>('Skill', SkillSchema);
