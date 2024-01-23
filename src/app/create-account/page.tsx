import Container from "@/components/Container";
import Link from 'next/link';
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label} from "@/components/ui/label";

export default function CreateAccount() {
  return (
   <Container>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3x1 md:w-2/5">
        <h1 className="text-3xl font-bold tracking-ight text-gray-900 md:text-5x1">
          Formulário de Cadastro para Simulação de Consórcio.
        </h1>

        <form 
          className="w-full px-4 mt-4"
        >
          <div className="grid gap-2">
            <div className="grid gap-2 text-left">
              <Label htmlFor="NameFull">
                Nome Completo:
              </Label>
              <Input 
                type="text"
                placeholder="Joe Smith"
              />

              <Label htmlFor="cpf">
                CPF:
              </Label>
              <Input 
                type="text"
                placeholder="xxx.xxx.xxx-xx"
              />

              <Label htmlFor="email">
                E-mail:
              </Label>
              <Input 
                type="email"
                placeholder="joesmith@gmail.com"
              />

              <Label htmlFor="phone">
                Telefone:
              </Label>
              <Input 
                type="text"
                placeholder="(75)3281-5559"
              />

              <Label htmlFor="password">
                Password:
              </Label>
              <Input 
                type="text"
                placeholder="*****"
              />
            </div>

            <Link href='/' className={buttonVariants()}>
              Cadastrar
            </Link>

            <Link href='/'>
              <Button variant='ghost'>
                Voltar &rarr;
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </Container>
  )
}
