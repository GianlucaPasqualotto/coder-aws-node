import AWS from "aws-sdk";

// Configuración AWS
AWS.config.update({
    region:"us-east-1"
});

// DYNAMODB
const dynamoDB = new AWS.DynamoDB.DocumentClient(); // Crear la instancia de la BD
const dynamoTableName = "productos-Table";

// SNS
const sns = new AWS.SNS(); // Instancia del servicio de mensajería
const SNS_TOPIC_ARN = "arn:aws:sns:us-east-1:755234995471:notificacionesEmail";

export {dynamoDB, dynamoTableName, sns,SNS_TOPIC_ARN}