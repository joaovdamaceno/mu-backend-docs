---
title: Testes automáticos (JUnit)
---

## Onde ficam

No padrão Maven:

- `src/test/java/...`

## Exemplo de testes úteis (ideia)

- `POST /api/posts` cria e retorna 201/200
- `GET /api/posts` lista e retorna array
- `GET /api/posts/{id}` retorna 200 quando existe e 404 quando não existe
- `POST /api/registrations`:
  - retorna 200/201
  - falha em email duplicado (unique constraint) com 409/400 dependendo do handler

## Dica prática

Se você está com pressa, foque em:
- 1 teste de “subiu e responde”
- 1 teste de “salva no banco”
- 1 teste de “lista”

E deixe os testes mais completos pra depois.

## Exemplo completo (Spring Boot)

```java
@SpringBootTest
@AutoConfigureMockMvc
class PostControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private PostRepository postRepository;

    @BeforeEach
    void setup() {
        postRepository.deleteAll();
        postRepository.save(new Post("hello", "world"));
    }

    @AfterEach
    void teardown() {
        postRepository.deleteAll();
    }

    @Test
    void shouldListPosts() throws Exception {
        mockMvc.perform(get("/api/posts"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.length()", greaterThanOrEqualTo(1)));
    }
}
```
- Use `@BeforeEach`/`@AfterEach` para preparar e limpar o estado do banco.
- Troque `PostRepository`/`/api/posts` pelos seus repositórios/endpoints reais.

## Rodar um teste específico
- Maven: `mvn -Dtest=PostControllerTest#shouldListPosts test`
- Gradle: `./gradlew test --tests PostControllerTest.shouldListPosts`

## Seed e limpeza de dados
- Para cenários de ponta a ponta, suba o backend, crie os dados via endpoints REST (ex.: `POST /api/posts`) usando [API → Endpoints](../api/endpoints.md) e [API → Postman](../api/postman.md).
- Em testes automatizados, você pode usar repositórios ou scripts SQL (`@Sql`) para popular tabelas antes do teste e limpar no `@AfterEach`.
- Se precisar rodar migrações antes da suíte, garanta que o profile de teste executa Flyway/Liquibase (`spring.flyway.enabled=true`).

## Diagnósticos comuns
- **Banco ausente ou inacessível**: verifique se `DB_URL`, `DB_USERNAME`, `DB_PASSWORD` estão exportadas e o container/serviço está de pé.
- **Migrações não aplicadas**: rode `mvn -Dflyway.configFiles=... flyway:migrate` ou reinicie o app para aplicar Flyway/Liquibase antes de testar.
- **Dados de seed faltando**: use os endpoints documentados em [API → Endpoints](../api/endpoints.md) para inserir registros base (ex.: usuários, posts) antes de validar.
