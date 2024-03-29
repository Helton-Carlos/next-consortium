import Container from "@/components/Container";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, Car, CheckCircle } from "lucide-react";
import Link from 'next/link';

const perks = [
  {
    name: 'Instalar App',
    Icon: ArrowDownToLine,
    description: 'Baixe Agora o app e receba todas as novidades em seu smartphone.'
  },
  {
    name: 'Consórcio Imobiliário',
    Icon: CheckCircle,
    description: 'Consórcio Imobiliário aprovado dinheiro na conta.'
  },
  {
    name: 'Consórcio Veícular',
    Icon: Car,
    description: 'Consórcio Veículo mais chances de aprovação.'
  }
]

export default function Home() {
  return (
   <>
    <Container>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3x1 md:w-2/5">
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
          <Link href='/services' className={buttonVariants()}>
            Conheça Nosso Serviço
          </Link>

          <Link href='/create-account'>
            <Button variant='ghost'>
              Simule Agora &rarr;
            </Button>
          </Link>
        </div>
      </div>
    </Container>

    <section className="border-t border-gray-200 bg-gray-50">
      <Container className="py-4 max-w-3x1">
        <div className="flex flex-col md:flex-row">
          {perks.map((perk) =>(
            <div key={perk.name} className="text-center">
              <div className="flex flex-col justify-center mx-auto py-4">
                <p className="font-semibold">{perk.name}</p>
                
                <div className="flex flex-col justify-center items-center mx-auto">
                  <div className="h-12 w-12 my-2 rounded-full bg-blue-400 flex items-center justify-center">
                    {<perk.Icon className="w-1/1 h-1/1 text-white" />}
                  </div>

                  <p>{perk.description}</p>
                </div>              
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
   </>
  )
}
