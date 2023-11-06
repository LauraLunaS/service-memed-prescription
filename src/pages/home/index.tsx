import React, { useEffect } from 'react';

const PrescriptionPage: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src =
      'https://integrations.memed.com.br/modulos/plataforma.sinapse-prescricao/build/sinapse-prescricao.min.js';
    script.dataset.token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.WzM2MzE3LCI2MTA0NGVkZThiMDg4YzdmMmIwMDlkNWM3NmJiMzJjMiIsIjIwMjItMTItMTciLCJzaW5hcHNlLnByZXNjcmljYW8iLCJwYXJ0bmVyLjMuMzE2NDkiXQ.Kv-VSTmXqCI-q6GPiPHF7Q8Prhz2RKy0sL0BWYfoM2I'; 

    script.addEventListener('load', () => {
    });

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h1>Meu sistema de Saúde</h1>
      <p>Proximo passo é acionar os comandos do modulo da prescrição</p>
    </div>
  );
};

export default PrescriptionPage;
