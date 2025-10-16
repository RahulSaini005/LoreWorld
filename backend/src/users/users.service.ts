import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async signup(name: string, email: string, password: string) {
    const existing = await this.userModel.findOne({ email });
    if (existing) throw new Error('User already exists');

    const hashed = await bcrypt.hash(password, 10);
    const user = new this.userModel({ name, email, password: hashed });
    return user.save();
  }

  async login(email: string, password: string) {
    const user = await this.userModel.findOne({ email });
    if (!user) throw new Error('User not found');

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error('Invalid credentials');

    return user; // return user info, token can be added later
  }
}
