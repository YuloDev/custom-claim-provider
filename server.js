const express = require('express');
const app = express();
app.use(express.json());

app.post('/token-claims', (req, res) => {
    try {
        // Extracting the correlationId from the request
        const correlationId = req.body.data.authenticationContext.correlationId;
        const userName = req.body.data.authenticationContext.user.displayName;

        // Creating the response with custom claims
        const response = {
            data: {
                "@odata.type": "microsoft.graph.onTokenIssuanceStartResponseData",
                actions: [
                    {
                        "@odata.type": "microsoft.graph.tokenIssuanceStart.provideClaimsForToken",
                        claims: {
                            correlationId: correlationId,
                            customClaim1: "customValue1",
                            customClaim2: ["customValue2", "customValue3"],
                            ApiVersion: "1.0",
                            CustomRoles: ["Writer", "Editor"]
                        }
                    }
                ]
            }
        };

        // Sending the response back to Microsoft Entra ID
        res.json(response);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(3000, () => console.log('API listening on port 3000'));
