import icon1 from '../../assets/img/icons/barbie1.jpeg'
import icon2 from '../../assets/img/icons/raquel1.jpeg'
import icon3 from '../../assets/img/icons/ken1.jpeg'


function Home() {
  return (
   <div className="min-h-screen bg-gray-400">
        <section id="home" className="py-20">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl font-bold mb-6">Transforme sua curiosidade em conhecimento com a <span className="text-[#068DBD]">Studix</span>!</h2>
                    <p className="text-xl mb-8 leading-relaxed">
                    Descubra uma vasta gama de cursos projetados para inspirar, capacitar e transformar sua paixão em expertise. Seja qual for seu objetivo – aprimorar habilidades, explorar novos interesses ou impulsionar sua carreira – a Studix é o seu portal para um mundo de possibilidades. 
                    <p> Comece a aprender, comece a crescer.</p>
                    </p>
                </div>
            </div>
        </section>
        <section id='categorias' className="py-30 bg-[#1A5566] border-4 border-[#60B657]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-black mb-4">Em alta agora</h3>
                </div>
                <div className="grid grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center p-6 border-2 border-black rounded-lg shadow-md">
                                <h3 className="text-2xl font-bold mb-2 ">categorias</h3>
                        </div>
                </div>
            </div>
        </section>
        <section id="categorias" className="py-20 bg-gray-400">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-black mb-4 border-2 shadow-md shadow-[#068DBD]">Feedbacks</h3>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center p-6 m-4 border-4 border-black rounded-lg shadow-md shadow-[#068DBD]">
                            <p className="text-xl mb-8 font-bold leading-relaxed">Incrivel!</p>
                                <p><span className="font-bold text-3xl"></span>Nunca pensei que aprender online seria tão envolvente! A Studix transformou meu tempo livre em conhecimento de verdade.</p>
                                <div className='flex justify-end items-center'>
                                    <img src={icon1} alt="" className='h-12 rounded-4xl'/>
                                    <p className="font-bold">@Carol_Fagundes</p>
                                </div>
                                
                        </div>
                        <div className="flex flex-col items-center text-center p-6 m-4 border-4 border-black rounded-lg shadow-md shadow-[#068DBD]">
                            <p className="text-xl mb-8 font-bold leading-relaxed">Minha salvação!</p>
                                <p>Os cursos são super didáticos e focados no que realmente importa. Sinto que estou evoluindo a cada aula.</p>
                                <div className='flex justify-end items-center'>
                                    <img src={icon3} alt="" className='h-12 rounded-4xl'/>
                                    <p className="font-bold">@Mario_Silva</p>
                                </div>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 m-4 border-4 border-black rounded-lg shadow-md shadow-[#068DBD]">
                            <p className="text-xl mb-8 font-bold leading-relaxed ">Perfeito!</p>
                                <p>Adoro a flexibilidade da Studix! Consigo estudar no meu ritmo, encaixando o aprendizado na minha rotina corrida.</p>
                                <div className='flex justify-end items-center'>
                                    <img src={icon2} alt="" className='h-12 rounded-4xl'/>
                                    <p className="font-bold">@Laisla_Rodrigues</p>
                                </div>
                        </div>
                </div>
        </section>


   </div>
  )
}

export default Home