// Exemplo de middleware de autenticação simples
const authenticateUser = (req: { body: { login: any; senha: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }, next: () => void) => {
  const { login, senha } = req.body;

  // Verificar se o login e senha são válidos
  if (login === 'PizariaADM' && senha === 'Martins123') {
    next(); // Permitir acesso se autenticado
  } else {
    res.status(401).json({ message: 'Acesso não autorizado. Verifique suas credenciais.' });
  }
};

module.exports = { authenticateUser };
