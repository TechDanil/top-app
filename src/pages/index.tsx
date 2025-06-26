import { Button } from "@/components";
import { Htag } from "@/components/Htag/Htag";

export default function Home() {
  return (
    <div>
      <Htag tag="h1">Текст</Htag>   
      <Button appearance="primary">Кнопка</Button>
      <Button appearance="ghost">Кнопка</Button>
      <></>  
    </div>
  );
}
