import { defineConfig } from 'orval';

export default defineConfig({
    api:{
        /**URL da documentação do swagger/api*/
        input: 'http://localhost:3333/docs/json',
        output: {
            /**Arquivo gerado com base na documentação */
            target: './src/http/api.ts',
            client: 'fetch',
            httpClient: 'fetch',
            clean: true,
            baseUrl: 'http://localhost:3333',

            override: {
                fetch: {
                    includeHttpResponseReturnType: false,
                }
            },
        }
    }
})
