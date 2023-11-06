import React, { useEffect } from 'react';

const PrescriptionPage: React.FC = () => {
  useEffect(() => {
    function initMemedScript() {
      const script = document.createElement("script");
      script.src = "https://integrations.memed.com.br/modulos/plataforma.sinapse-prescricao/build/sinapse-prescricao.min.js";
      script.dataset.token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.WzM2MzE3LCI2MTA0NGVkZThiMDg4YzdmMmIwMDlkNWM3NmJiMzJjMiIsIjIwMjItMTItMTciLCJzaW5hcHNlLnByZXNjcmljYW8iLCJwYXJ0bmVyLjMuMzE2NDkiXQ.Kv-VSTmXqCI-q6GPiPHF7Q8Prhz2RKy0sL0BWYfoM2I";
      script.addEventListener("load",prescriptionMemed);
      document.body.appendChild(script);
    }

    function prescriptionMemed() {
      
      if (window.MdSinapsePrescricao && window.MdHub) {
        window.MdSinapsePrescricao.event.add("core:moduleInit", async function (module: any) {
          if (module.name === "plataforma.prescricao") {
            await window.MdHub.command.send("plataforma.prescricao", "setPaciente", {
              idExterno: "algum_tipo_de_hash_ou_id",
              nome: "Jhon D. Rockefeller",
              telefone: "99999999999",
              cpf: "99999999999",
           
            });
            window.MdHub.module.show("plataforma.prescricao");
          }
        });
      }
    }

    initMemedScript();
  }, []);

  return (
    <div>
      <h1>Meu sistema de Saúde</h1>
      <p>Proximo passo é acionar os comandos do modulo da prescrição</p>
    </div>
  );
};

export default PrescriptionPage;

