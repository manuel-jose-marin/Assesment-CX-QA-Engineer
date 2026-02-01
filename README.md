# Automatizacion DemoQA con Serenity/JS + Playwright

## Objetivo
Este proyecto implementa la prueba tecnica para el rol de CX Quality Assurance Engineer.
La suite automatiza 7 casos sobre https://demoqa.com, usando BDD con Gherkin y el patron Screenplay.

## Prerequisitos
- Node.js ^20 || ^22 || ^24
- Java 17+ (requerido para Serenity BDD)
- npm
- Navegadores de Playwright

## Instalación
```shell
npm ci
npx playwright install
```

## Ejecucion
```shell
# Ejecutar toda la suite
npm test

# Ejecutar un feature especifico,
npm test -- features/demoqa/01-home.feature

# Ejecutar en modo headed
HEADLESS=false npm test
```

## Reporte Serenity BDD
El reporte HTML se genera en `./target/site/serenity/index.html`,

Opcionalmente, puedes servirlo en un servidor local:
```shell
npm start
```
El reporte queda disponible en `http://localhost:8080`.

## Estructura del proyecto
```
features/
├── demoqa/                                # Features Gherkin de DemoQA
│   ├── 01-home.feature
│   ├── 02-elements-text-box.feature
│   ├── 03-forms-practice-form.feature
│   ├── 04-alerts-windows.feature
│   ├── 05-widgets-accordion.feature
│   ├── 06-interactions-drag-drop.feature
│   └── 07-book-store-search.feature
├── step-definitions/                      # Step definitions delgadas
│   ├── demoqa.steps.ts
│   └── parameter.steps.ts
└── support/
    └── serenity.config.ts                 # Configuracion Serenity/JS

test/
├── demoqa/
│   ├── tasks/                             # Tareas Screenplay
│   └── questions/                         # Verificaciones y preguntas
├── ui/                                    # Mapeo UI por seccion/pagina
│   ├── alerts/
│   ├── bookstore/
│   ├── common/
│   ├── elements/
│   ├── forms/
│   ├── home/
│   ├── interactions/
│   └── widgets/
└── Actors.ts                              # Actores y habilidades
```

## Casos automatizados
1. Navegar a la pagina principal y validar secciones clave.
2. Elements - Text Box: ingresar nombre y correo y validar salida.
3. Forms - Practice Form: completar datos y validar confimacion.
4. Alerts, Frame & Windows: alerta simple y nueva pestana.
5. Widgets - Accordion: expandir paneles y validar contenido.
6. Interactions - Droppable: drag & drop y validar resultado.
7. Book Store: buscar termino y validar resultados.

## Decisiones de diseno
- BDD con Gherkin, como contrato legible para negocio.
- Screenplay para evitar codigo espagueti, con Tasks y Questions reutilizables.
- Selectores centralizados en UI Maps, para facilitar cambios sin romper tests.

## Notas
- Los screenshots se generan automaticamente en fallas con Serenity/JS.
- El reporte Serenity BDD se genera con `npm test` al finalizar la ejecucion.
