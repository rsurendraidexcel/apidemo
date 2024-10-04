import { Request, Response } from 'express';
//import { User } from '../models/User';

export class UserController {
  async create(req: Request, res: Response) {
    //const user = await User.create(req.body);
    res.status(201).json({data: 'hellier'});
  }

  async findAll(req: Request, res: Response) {
   // const users = await User.findAll();
    res.json({data: 'hellier'});
  }

  async findOne(req: Request, res: Response) {
   // const user = await User.findByPk(req.params.id);
    //if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({data: 'hellier'});
  }

  async update(req: Request, res: Response) {
   // const user = await User.findByPk(req.params.id);
    // if (!user) return res.status(404).json({ message: 'User not found' });

    // await user.update(req.body);
    res.json({data: 'hellier'});
  }

  async delete(req: Request, res: Response) {
    // const user = await User.findByPk(req.params.id);
    // if (!user) return res.status(404).json({ message: 'User not found' });

    // await user.destroy();
    res.status(204).send();
  }
}