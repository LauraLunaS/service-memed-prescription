import React, { useEffect } from 'react';

const Home: React.FC = () => {
  useEffect(() => {
    function initMemedScript() {
      const script = document.createElement('script');
      script.src = 'https://integrations.memed.com.br/modulos/plataforma.sinapse-prescricao/build/sinapse-prescricao.min.js';
      script.dataset.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.WzM2MzE3LCI2MTA0NGVkZThiMDg4YzdmMmIwMDlkNWM3NmJiMzJjMiIsIjIwMjItMTItMTciLCJzaW5hcHNlLnByZXNjcmljYW8iLCJwYXJ0bmVyLjMuMzE2NDkiXQ.Kv-VSTmXqCI-q6GPiPHF7Q8Prhz2RKy0sL0BWYfoM2I';
      script.setAttribute('data-color', "#4A90A7");
      script.addEventListener('load', prescricaoMemed);
      document.body.appendChild(script);
    }

    function prescricaoMemed() {
      (window as any).MdSinapsePrescricao.event.add('core:moduleInit', async function (module: any) {
        if (module.name === 'plataforma.prescricao') {
          await (window as any).MdHub.command.send('plataforma.prescricao', 'setPaciente', {
            idExterno: 'algum_tipo_de_hash_ou_id', 
            nome: 'Roberto Silva', 
            telefone: '81 995678405', 
            cpf: '000.000.000-03', 
            nome_social: 'Roberto Silva', 
            endereco: 'Rua da Saúde, 123', 
          });
          (window as any).MdHub.module.show('plataforma.prescricao');
        }
      });
    }


    initMemedScript();
  }, []);

  return (
    <div>
    </div>
  );
};

export default Home;


