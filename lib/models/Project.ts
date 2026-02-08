import mongoose, { Schema, Document } from 'mongoose';

export interface IProject extends Document {
  _id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
  ongoing: boolean;
  progress?: number; // 0-100 for ongoing projects
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    title: {
      type: String,
      required: [true, 'Please provide a project title'],
      maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    description: {
      type: String,
      required: [true, 'Please provide a project description'],
      maxlength: [500, 'Description cannot be more than 500 characters'],
    },
    image: {
      type: String,
      required: [true, 'Please provide a project image'],
    },
    technologies: {
      type: [String],
      required: [true, 'Please provide at least one technology'],
    },
    link: {
      type: String,
    },
    github: {
      type: String,
    },
    ongoing: {
      type: Boolean,
      default: false,
    },
    progress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);
