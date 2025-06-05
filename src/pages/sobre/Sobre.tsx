import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

function Sobre() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-[#1A5566] to-[#068DBD]">
        <div className="">
          <h1 className="text-5xl text-white m-4">
            Studix - Conhecimento é a chave para o futuro
          </h1>
          <p className="text-white text-lg max-w-2xl text-center mb-4">
            Na Studix, acreditamos que o conhecimento tem o poder de transformar
            vidas. E no coração dessa transformação estão os educadores:
            profissionais apaixonados e dedicados a compartilhar sua sabedoria e
            inspirar o aprendizado. Nossa missão é empoderar esses educadores,
            fornecendo uma plataforma intuitiva, robusta e completa para que
            possam criar, gerenciar e expandir seus cursos online com total
            autonomia e profissionalismo. Nascemos da percepção de que, enquanto
            a educação online se expande exponencialmente, muitos professores
            enfrentam barreiras tecnológicas e administrativas para levar seus
            cursos ao mundo. Queremos derrubar essas barreiras. A Studix surge
            como a parceira ideal para educadores que desejam focar no que fazem
            de melhor: ensinar.
          </p>
        </div>
        <h2 className="text-4xl text-white m-4">Objetivos</h2>
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-[#1A5566] to-[#068DBD]">
          <div>
            <h3 className="text-3x1 text-white mb-4">Missão</h3>
            <p className="text-white text-lg max-w-2xl text-center mb-4">
              Empoderar educadores, fornecendo uma plataforma intuitiva, robusta
              e completa para que possam criar, gerenciar e expandir seus cursos
              online com total autonomia e profissionalismo, democratizando o
              acesso ao conhecimento.
            </p>
          </div>
          <div>
            <h3 className="text-3xl text-white mb-4">Visão</h3>
            <p className="text-white text-lg max-w-2xl text-center mb-4">
              Ser a principal plataforma de referência para educadores que
              buscam transformar seu conhecimento em legado digital, reconhecida
              pela inovação, facilidade de uso e pelo impacto positivo na
              educação online global.
            </p>
          </div>
          <div>
            <h3 className="text-3xl text-white mb-8">Valores</h3>
            <p className="text-white text-lg max-w-2xl text-center mb-4">
              Paixão pela Educação: Somos movidos pelo desejo de facilitar o
              acesso ao conhecimento de qualidade e acreditamos no poder
              transformador da educação. Empoderamento do Educador: Colocamos o
              professor no centro de tudo o que fazemos, oferecendo ferramentas
              e suporte para seu sucesso e autonomia. Inovação Constante:
              Buscamos continuamente as melhores soluções tecnológicas e
              metodológicas para aprimorar a experiência de ensino e aprendizado
              online.
            </p>
          </div>
        </div>
      </div>
      <div className="w-60 h-70 bg-white bg-opacity-20 rounded-lg text-center flex  justify-center shadow-2xl hover:border hover:border-pink-300">
        <div className=" text-black">
          <img
            src=""
            alt="Guilherme Dino"
            className="w-60 h-30 shadow-2xl object-cover rounded-t-lg"
          />
          <h1 className="text-2xl ">Guilherme Dino</h1>
          <div className="flex flex-col items-center gap-10">
            <p>Desenvolvedor do projeto</p>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank">
                <GithubLogoIcon size={40} className="hover:text-red-300" />
              </a>
              <a href="https://Linkedin.com" target="_blank">
                <LinkedinLogoIcon size={40} className="hover:text-blue-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sobre;
