import {
  GithubLogoIcon,
  LinkedinLogoIcon
}

  from "@phosphor-icons/react";

const integrantes = [{
  nome: "Camille Tarine",
  papel: "Tester do projeto",
  github: "https://github.com/CahTarine",
  linkedin: "https://www.linkedin.com/in/camille-tarine/",
  img: "../src/assets/cam.jpeg",
}

  ,
{
  nome: "Carlos Henrique",
  papel: "Desenvolvedor",
  github: "https://github.com/Henrykeeh",
  linkedin: "https://www.linkedin.com/in/carlos-henrique-da-silva-barbosa-no-linked-in/",
  img: "../src/assets/car.jpeg",
}

  ,
{
  nome: "Henrique Machado",
  papel: "P.O. do projeto",
  github: "https://github.com/scottineo",
  linkedin: "https://www.linkedin.com/in/luiz-henrique-machado/",
  img: "../src/assets/Hen.jpeg",
}

  ,
{
  nome: "Beatriz Bueno",
  papel: "Desenvolvedor",
  github: "https://github.com/BeaKaylanee",
  linkedin: "https://www.linkedin.com/in/beatriz-kailane-3513b5248/",
  img: "../src/assets/bea.jpeg",
}

  ,
{
  nome: "Guilherme Dino",
  papel: "Desenvolvedor",
  github: "https://github.com/meDinoo",
  linkedin: "https://www.linkedin.com/in/guilherme-dino-pereira/",
  img: "./src/assets/gui.jpeg",
}

  ,
{
  nome: "Rosana Ferreira",
  papel: "Desenvolvedora back-end",
  github: "https://github.com/lelesrosana",
  linkedin: "https://linkedin.com",
  img: "./src/assets/ros.jpeg",
}

  ,
];

function Sobre() {
  return (<> {
    /* Seção principal */
  }

    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#1A5566] to-[#068DBD] px-4 py-12" > <h1 className="text-5xl text-white m-4 text-center font-extrabold" > Studix - Conhecimento é a chave para o futuro </h1> <p className="text-white text-lg max-w-3xl text-center mb-12 leading-relaxed" > Na Studix, acreditamos que o conhecimento tem o poder de transformar vidas. E no coração dessa transformação estão os educadores: profissionais apaixonados e dedicados a compartilhar sua sabedoria e inspirar o aprendizado. Nossa missão é empoderar esses educadores,
      fornecendo uma plataforma intuitiva, robusta e completa para que possam criar, gerenciar e expandir seus cursos online com total autonomia e profissionalismo. Nascemos da percepção de que, enquanto a educação online se expande exponencialmente, muitos professores enfrentam barreiras tecnológicas e administrativas para levar seus cursos ao mundo. Queremos derrubar essas barreiras. A Studix surge como a parceira ideal para educadores que desejam focar no que fazem de melhor: ensinar. </p> <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch mb-16 max-w-6xl" > <div className="flex-1 bg-gradient-to-br from-white/40 to-white/10 border border-white/30 rounded-2xl p-6 shadow-lg backdrop-blur-sm transition-transform hover:scale-105 hover:shadow-2xl" > <h3 className="text-3xl text-gray-900 mb-4 text-center font-extrabold tracking-tight" > Missão </h3> <p className="text-gray-800/90 text-center text-lg leading-relaxed flex-grow" > Capacitar educadores a democratizar o acesso ao conhecimento por meio de uma plataforma digital inovadora, que facilite a criação, gestão e expansão de cursos online com autonomia, segurança e excelência. </p> </div> <div className="flex-1 bg-gradient-to-br from-white/40 to-white/10 border border-white/30 rounded-2xl p-6 shadow-lg backdrop-blur-sm transition-transform hover:scale-105 hover:shadow-2xl" > <h3 className="text-3xl text-gray-900 mb-4 text-center font-extrabold tracking-tight" >Visão</h3> <p className="text-gray-800/90 text-center text-lg leading-relaxed flex-grow" > Tornar-se a plataforma líder e referência global em educação digital,
        reconhecida por transformar vidas, impulsionar educadores e fomentar uma comunidade engajada e colaborativa. </p> </div> <div className="flex-1 bg-gradient-to-br from-white/40 to-white/10 border border-white/30 rounded-2xl p-6 shadow-lg backdrop-blur-sm transition-transform hover:scale-105 hover:shadow-2xl" > <h3 className="text-3xl text-gray-900 mb-4 text-center font-extrabold tracking-tight" >Valores</h3> <p className="text-gray-800 text-lg leading-relaxed flex-grow" > <strong>Paixão pela Educação:</strong> Acreditamos no poder transformador do ensino.<br /> <strong>Empoderamento do Educador:</strong> Colocamos o professor no centro da inovação.<br /> <strong>Inovação Contínua:</strong> Evoluímos constantemente para oferecer o melhor.<br /> <strong>Inclusão e Acessibilidade:</strong> Educação para todos, sem barreiras.<br /> <strong>Compromisso com a Qualidade:</strong> Entregamos uma experiência profissional e confiável. </p> </div> </div> <h2 className="text-4xl text-white mb-8 font-semibold" >Nosso Time</h2> <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl w-full px-4" > {
          integrantes.map(({
            nome, papel, github, linkedin, img

          }) => (<div key={
            nome
          }

            className="bg-gradient-to-tr from-white/30 to-white/10 border border-white/30 rounded-xl p-6 shadow-xl backdrop-blur-sm flex flex-col items-center transition-transform hover:scale-105 hover:brightness-110 hover:shadow-2xl"

          > {
              img ? (<img src={
                img
              }

                alt={
                  nome
                }

                className="w-32 h-32 object-cover rounded-full mb-4 shadow-md"

              />) : (<div className="w-32 h-32 rounded-full bg-gradient-to-tr from-[#068DBD] to-[#1A5566] flex items-center justify-center text-4xl font-bold text-white mb-4 select-none" > {
                nome.split(" ").map((n) => n[0]).join("")
              }

              </div>)
            }

            <h3 className="text-2xl text-black font-semibold mb-1" > {
              nome
            }

            </h3> <p className="text-black mb-4 italic" > {
              papel
            }

            </p> <div className="flex gap-6" > <a href={
              github
            }

              target="_blank"
              rel="noopener noreferrer"

              aria-label={
                `GitHub de $ {
                        nome
                    }

                    `
              }

              className="hover:text-[#f1ecec] transition-colors"

            > <GithubLogoIcon size={
              40
            }

              /> </a> <a href={
                linkedin
              }

                target="_blank"
                rel="noopener noreferrer"

                aria-label={
                  `LinkedIn de $ {
                        nome
                    }

                    `
                }

                className="hover:text-[#3c5288] transition-colors"

              > <LinkedinLogoIcon size={
                40
              }

                /> </a> </div> </div>))
        }

      </div> </div> </>);
}

export default Sobre;