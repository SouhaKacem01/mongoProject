curl --location --request POST 'https://eu-west-2.aws.data.mongodb-api.com/app/data-abrdq/endpoint/data/v1/action/findOne' \
--header 'Content-Type: application/json' \
--header 'Access-Control-Request-Headers:*' \
--header 'api-key: o8WsmSRKuYbrujxfMnUypn4OXEi9apzRtH4OYaIfgorfywl2kHqUaOsHXatGF4Ib'\
--data-raw '{
    "dataSource":"SCluster",
    "database":"sample_mflix",
    "collection":"movies",
    "projection": {"title": 1}
}' 