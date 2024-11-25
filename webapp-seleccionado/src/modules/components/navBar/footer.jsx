export default function Footer(){

return (
<footer className="bg-[url('Vector.svg')]  mt-4">

<div className="pt-28 flex justify-around">

    <section className="px-12 font-Roboto text-xs pb-3">
    <h3 className="font-Roboto text-AzulM font-bold">Programadores</h3>
    <p>
    Alejandro Camacho  <br />
    Gregorio Moraleas 
    <br />
    Dewinson Cruz 
    <br />
    Matias Miguel 
    <br />
    Gaston Gomez 
    </p>
    <h3 className="font-Roboto text-AzulM font-bold">Diseñadora UX/UI</h3>
    <p>Marian Miranda</p>






    </section>
    <section className="pt-10">

<img src="logo-33.svg" alt=""  className="scale-150"/>
<img src="Redes.svg" alt="" className="px-9 mt-4"/>

    </section>
    <section className="flex  text-xs ">

        <div className="px-7 justify-items-end">

            <h3 className="text-AzulM font-bold">Legal</h3>
            <p>Terminos y condiciones</p>
            <p>Politicas de privacidad</p>
           <p>Politica de cookies</p>
            
            

        </div>
        <div className="justify-items-end">


            <h3 className="text-AzulM font-bold">Informaciones</h3>
            <p>Tutoriales</p>
            <p>Contacto</p>
        </div>
    </section>
</div>

</footer>
)



}

