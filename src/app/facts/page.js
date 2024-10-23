import CatFact from "@/components/catFact";
import styles from "../page.module.css"


export default function() {
    return (
    <main>
        <h1>Fun Facts</h1>
        <section>
            <CatFact breed="Black Cat" shortFact="Black cats are often considered symbols of good luck in several cultures!"
            pic="../black-cat.webp"
            />
             <CatFact breed="Maine Coon" shortFact="Maine Coons are one of the largest domesticated cat breeds and can weigh up to 18 pounds or more."
            pic="../Maine-coon.jpg"
            />
             <CatFact breed="Persian" shortFact="Persian cats are famous for their luxurious long fur and flat faces."
            pic="../Persian.jpg"
            />
             <CatFact breed="Scottish Fold" shortFact="Scottish Folds are known for their distinctive folded ears, which give them an owl-like appearance."
            pic="../Scottish-fold.jpg"
            />
             <CatFact breed="Siamese" shortFact='Siamese cats are highly vocal and known for their "talkative" nature.'
            pic="../Siamese.jpg"
            />
             <CatFact breed="Persian" shortFact="Persian cats are famous for their luxurious long fur and flat faces."
            pic="../Sphynx.jpg"
            />
        </section>
    </main>
    )
   
}