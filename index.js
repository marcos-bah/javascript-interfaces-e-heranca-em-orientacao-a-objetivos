import { Cliente } from "./Cliente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 1000, 27827272);
const gerente = new Gerente("Ricardo", 900, 2828222);
const cliente = new Cliente("Lais", 233422, "123");

const logado = SistemaAutenticacao.login(cliente, "ssss");

console.log(logado);