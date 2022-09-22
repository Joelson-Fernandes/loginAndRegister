import jwt from 'jsonwebtoken';
import User from '../models/user';

class UserControler {
  // create
  async store(req, res) {
    try {
      // cria novo ususario
      const user = await User.create(req.body);
      user.save();
      return res.status(200).json(user);
    } catch (e) {
      // verifica se email ja esta cadastrado
      if (e.keyPattern) {
        return res.status(400).json({
          errors: ['Email ja cadastrado'],
        });
      }
      // validação de erros
      if (e.name === 'ValidationError') {
        const error = [];
        Object.keys(e.errors).forEach((key) => {
          error.push(e.errors[key].message);
        });

        return res.status(400).json({
          errors: error,
        });
      }
      return res.status(400).json({ e });
    }
  }

  // user login
  async login(req, res) {
    try {
      const { email, senha } = req.body;
      const user = await User.findOne({ email });

      // verifica se o usuario e senha coincidem
      if (!user || !(await user.validatePassword(senha))) {
        return res
          .status(400)
          .json({ errors: ['Email e/ou senha inválido(s)'] });
      }

      const { nome, _id } = user;
      const token = jwt.sign({ _id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return res.status(200).json({ _id, nome, email, token });
    } catch (e) {
      return res.status(400).json('erro');
    }
  }
}

export default new UserControler();
