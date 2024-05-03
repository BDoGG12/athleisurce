@startuml LayeredArchitecture

!define PresentationLayer [rectangle] Presentation Layer\nNext.js Frontend
!define BusinessLayer [rectangle] Business Layer\nASP.NET Core Web API
!define PersistenceLayer [rectangle] Persistence Layer\nMongoDB
!define DatabaseLayer [rectangle] Database Layer\nMongoDB Server

' Components
node "Next.js Frontend" as Frontend {
    [Pages]
    [Components]
    [Client-side Logic]
}

node "ASP.NET Core Web API" as Backend {
    [Controllers]
    [Services]
    [DTOs (Data Transfer Objects)]
}

node "MongoDB" as Database {
    [Models]
    [Repositories]
    [Database Configuration]
}

node "MongoDB Server" as MongoServer {
    [Collections]
    [Indexes]
    [Database Configurations]
}

' Relationships
PresentationLayer --> BusinessLayer : HTTP Requests
BusinessLayer --> PersistenceLayer : Data Access
PersistenceLayer --> DatabaseLayer : Database Operations

@enduml
