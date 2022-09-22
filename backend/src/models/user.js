import mongoose from 'mongoose';
import isEmail from 'validator/lib/isEmail';
import bcrypt from 'bcryptjs';

const { Schema } = mongoose;
const SALT_WORK_FACTOR = 10;

const userSchema = new Schema(
  {
    nome: {
      type: String,
      required: [true, 'Campo nome obrigatório'],
    },
    sobrenome: {
      type: String,
      required: [true, 'Campo sobrenome obrigatório'],
    },
    email: {
      type: String,
      required: [true, 'Campo email obrigatório'],
      unique: true,
      lowercase: true,
      validate(value) {
        if (!isEmail(value)) {
          throw new Error('Email inválido');
        }
      },
    },
    senha: {
      type: String,
      required: [true, 'Campo senha obrigatório'],
    },
  },
  {
    timestamps: true,
  }
);

// criptografar senha
userSchema.pre('save', async function save(next) {
  // apenas faça o hash da senha se ela tiver sido modificada (ou for nova)
  if (!this.isModified('senha')) return next();

  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.senha = await bcrypt.hash(this.senha, salt);
    return next();
  } catch (error) {
    return next(error);
  }
});

userSchema.methods.validatePassword = async function validatePassword(data) {
  return bcrypt.compare(data, this.senha);
};

export default mongoose.model('User', userSchema);
