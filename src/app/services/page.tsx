import Container from "@/components/Container";
import Card from "@/components/Card";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from 'next/link';

export default function ServicesPage() {
  return (
   <Container>
      <Card>
        <div className="m-2">
          <h3 className="text-blue-600 font-semibold underline my-4">
            Title
          </h3>
          
          <p className="my-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci vero 
            quaerat facere aliquid quis itaque inventore dolores alias necessitatibus 
            temporibus eius, error eaque reprehenderit nemo accusantium id quisquam! Magni, labore.
          </p>

          <Link className="my-4" href='/create-account'>
            <Button className={buttonVariants()}>
              Saiba mais &rarr;
            </Button>
          </Link>
        </div>
      </Card>
    </Container>
  )
}
