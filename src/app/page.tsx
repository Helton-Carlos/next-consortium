import Container from "@/components/Container";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine } from "lucide-react";
import Link from 'next/link';

const perks = [
  {
    name: 'Instalar App',
    Icon: ArrowDownToLine,
    description: 'Baixe Agora o app e receba todas as novidades em seu smartphone'
  },
  {
    name: 'Instalar App',
    Icon: ArrowDownToLine,
    description: 'Baixe Agora o app e receba todas as novidades em seu smartphone'
  },
  {
    name: 'Instalar App',
    Icon: ArrowDownToLine,
    description: 'Baixe Agora o app e receba todas as novidades em seu smartphone'
  }
]

export default function Home() {
  return (
   <>
    <Container>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3x1">
        <h1 className="text-3xl font-bold tracking-ight text-gray-900 md:text-5x1">
          Seu sonho mais perto de você{' '}
          <span className="text-blue-600">
            Consórcio Digital Nordeste
          </span>.
        </h1>

        <p className="mt-5 text-lg max-w-prose text-center text-muted-foreground">
          Bem-vindo ao  Consórcio Digital Nordeste.
        </p>

        <div className='flex flex-col sm:flex-row gap-4 mt-5'>
          <Link href='/' className={buttonVariants()}>
            Conheça Nosso Serviço
          </Link>

          <Button variant='ghost'>
            Simule Agora &rarr;
          </Button>
        </div>
      </div>
    </Container>

    <section className="border-t border-gray-200 bg-gray-50">
      <Container className="py-20">
        <div className="grid grid-cols-1 gap-y-12 m:grid-cols-2">
          <div>
            <div className="text-center md:flex">
              <div className="text-center md:flex md:items-start">
                <div className="h-16 w-16 flex items-center justify-center rounded-sm">
                  <ArrowDownToLine />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
   </>
  )
}
