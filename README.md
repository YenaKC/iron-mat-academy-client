# Iron Mat Academy


## Description
Iron Mat Academy is a promotional website for a No-Gi Jiu-Jitsu academy.
The app allows visitors to explore the academy, check the weekly class schedule, learn about the coachig team, and browse the techniques that will be covered during the week and explore the academy's growing technique database.

The visual concept of the project is inspired by combat sports, UFC-style dark aethetics, strong typography, and dynamic martial arts visulas.

## User Stories
- As a visitor, I want to see the academy's main information so that I can understand what the academy offers.
- as a visitor, I want to check the weekly class schedule so that I can know when classes take place.
- As a visitor, I want to see wchich coach teaches each class.
- As a visitor, I want to browse the coaches and their specialties.
- As a user, I want to browse No-Gi Jiu-Jitsu techniques.
- As a user, I want to search technique to the dictionary.
- As a user, I want to edit an existing technique.
- As a user, I want to delete a technque.
- As a student, I want to preview that will be taught this week so that I can prepare before class.
- As a visitor, I want to learn what techniques are covered in the academy curriculum.

## MVP
### Main Features
- Home page
- Coaches page
- Weekly chedule page / agenda page
- Class details page with coach information
- Weekly techniques section
- Technique database
- Create technique
- Edit technique
- Delete technique
- Search techniques by name
- Responsive design
- Basic error handling
- Loading states

## Collections
The project will use three main collections:
1. Coaches
The `coaches`collecition stores information about the coaching team.

Example:
```bash
{
    "id": 1,
    "name": "Coach Alex",
    "belt": "Black Belt",
    "specialty": "Leg Locks",
    "description": "No-Gi coach specialized in leg lock systems and competition strategy.",
    "sketchImage": "/images/coach-alex-sketch.jpg",
    "realImage": "/images/coach-alex-real.jpg"
}
```

2. Classes
The `classes` collection stores the weekly class schedule.
Example:
```bash
{
    "id": 1,
    "title": "No-Gi Fundamentals",
    "day": "Monday",
    "time": "19:00",
    "level": "Beginner",
    "duration": 60,
    "coachId": 1
    "techniqueIds": [1, 3]
}
````

3. Techniques
The `techniques` collection stores the academy's technique database. Techniques can be linked to weekly classes, allowing students to preview what will be taught during the week.

Example:
```bash
{
    "id": 1,
    "name": "Heel Hook",
    "category": "Leg Lock",
    "position": "50/50",
    "level": "Advanced",
    "description": "A submission targeting the heel and knee linee.",
    "youtubeUrl": "https://www.youtube.com/"
}
```

## Data Relationships
The main relationship is between `coaches` and `classes`.

One coach can teach many classes.
One class belongs to one coach.

coaches → classes
classes → techniques

In JSON Server, the relationship will be handled with `coachId`.

Example routes:

GET /classes/1?_expand=coach
GET /coaches/1?_embed=classes

## CRUD
Full CURD functionality will be applied to the techniques collection.
- Create a technique
- Read all techniques
- Read one technique
- Update a technique
- Delete a technique

The `coaches` and `classes` collections will be mainly read-only because this is a promotional academy website.

Users can contribute new techniques to the academy's technique database. This allows the database to grow over time and include techniques that may not yet be covered in the weekly curriculum.

## Search/Filter
The search functionality will be applied to the technique dictionary.

Users will be able to search techniques by name.

Users can serach techniuqes by name and quickly find techniques that are part of the weekly curriculum.

Possile bonus filters:
- Category
- Level
- Position

## Pages
 | Route | Page | Description |
 |-------|------|-------------|
 | `/` | Home | Landing page for the academy |
 | `/coaches` | Coaches | List of coaches |
 | `/classes` | Classes | Weekly class agenda |
 | `/classes/:classId` | Class Details | Details of one class and its coach |
 | `/techniques` | Techniques | Technique dictionary with search |
 | `/techniques/:techniqueId` | Technique Details | Details of one technique |
 | `/techniques/new` | Add Technique | Form to create a new technique |
  `/techniques/:techniqueId/edit` | Edit Technique | Form to update a technique |

## Components
- Navbar
- Footer
- HeroSection
- CoachCard
- ClassCard
- ClassList
- TechniqueCard
- TechniqueList
- TechniqueForm
- SearchBar
- LoadingSpinner
- ErrorMessage

## Bonus Features
- Coach card hover effect: sketch / anime-style image changes to real photo on hover
- UFC-inspired dark visual design
- Category and level filters for techniques
- Embedded YouTube videos for techniques
- Contact section
- Responsive mobile-first layout

## Tech Stack
- React
- React Router DOM
- Axios
- JSON Server
- CSS
- Vite

## Repository Links
### Frontend
To be added.
### Backend
https://github.com/YenaKC/iron-mat-academy-server.git

## Deployment Links
### Frontend
To be added.
### Backend
To be added.
### Project Status
Completed for Ironhack Module 2 project presentation.