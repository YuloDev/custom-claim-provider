const express = require('express');
const app = express();
app.use(express.json());

app.post('/token-claims', (req, res) => {
    try {
        const directory_groups = [
            "AD/GA_MotorTransferencias_Aprobar_CentroAutorizador",
            "AD/GA_MotorTransferencias_Aprobar_TXN_NAC",
            "AD/GA_MotorTransferencias_TXN_BP",
            "AD/GA_MotorTransferencias_ConsultasCaso",
            "AD/GA_MotorTransferencias_ConsultasCO",
            "Internal/everyone",
            "AD/GA_MotorTransferencias_IngresoTI",
            "AD/GA_MotorTransferencias_ConsultasTI",
            "AD/GA_MotorTransferencias_AdminCO",
            "AD/GA_MotorTransferencias_IngresoIF",
            "AD/GA_MotorTransferencias_ConsultasRO",
            "AD/GA_MotorTransferencias_Consultas_GR",
            "AD/GA_MotorTransferencias_Correccion_GR",
            "AD/GA_TEST_MotorTransferencias_IngresoRemesas",
            "AD/GA_LOGINC_BANCS",
            "AD/GA_MotorTransferencias_ConsultasAF",
            "AD/GA_MotorTransferencias_ConsultasTI_CC",
            "AD/GA_MotorTransferencias_Aprobar_TXN_NA_RA1",
            "AD/GA_MotorTransferencias_TXN_IB",
            "AD/GA_MotorTransferencias_IngresoAC",
            "AD/GA_MotorTransferencias_Consulta_TXN_NAC"
        ];

        const claims = {
            directory_groups: directory_groups,
            customRole: 'Admin',
            department: 'IT'
        };

        res.json({
            data: {
                actions: [
                    {
                        claims
                    }
                ]
            }
        });
    } catch (error) {
        console.error(error);  // Log de error para diagnóstico
        res.status(500).send('Internal Server Error');
    }
});

app.listen(3000, () => console.log('API escuchando en el puerto 3000'));
