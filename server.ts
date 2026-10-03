import {createServer} from 'node:http';

createServer(function(request, response) {
    if (request.url === '/api/health' && request.method === 'GET') {
        response.writeHead(
            200,
            {'content-type': 'application/json'}
        );
        response.end(JSON.stringify({ sucess: {
            status: 200,
            message: 'Recurso encontrado'
        }}))

        return;
    }

    response.writeHead(
            404,
            {'content-type': 'application/json'}
        );
        response.end(JSON.stringify({ error: {
            status: 404,
            message: 'Recurso não encontrado'
        } }))
    }).listen(3000);

