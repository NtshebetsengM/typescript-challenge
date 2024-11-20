interface Person{
    id: number;
      name: string;
      isActive: boolean;
      age: number;
      skills: string[];
      details: {
        address: string;
        city: string;
        zipCode: number;
      };
      score: number | null;
      status: undefined | null;
      birthdate: Date;
      greet: () => string;
       
}





const complexArray : Person[]= [
    {
      id: 1,
      name: "Alice",
      isActive: true,
      age: 25,
      skills: ["JavaScript", "TypeScript", "React"],
      details: {
        address: "123 Main St",
        city: "Wonderland",
        zipCode: 12345,
      },
      score: null,
      status: undefined,
      birthdate: new Date("1998-05-15"),
      greet: function () {
        return `Hello, I'm ${this.name}`;
      },
    },
    {
      id: 2,
      name: "Bob",
      isActive: false,
      age: 30,
      skills: ["Python", "Django", "Machine Learning"],
      details: {
        address: "456 Side St",
        city: "Shire",
        zipCode: 54321,
      },
      score: 100,
      status: null,
      birthdate: new Date("1993-08-20"),
      greet: function () {
        return `Hello, I'm ${this.name}`;
      },
    },
    {
      id: 3,
      name: "Charlie",
      isActive: true,
      age: 28,
      skills: ["Java", "Spring Boot", "Kotlin"],
      details: {
        address: "789 Circle Dr",
        city: "Gotham",
        zipCode: 67890,
      },
      score: 85,
      status: undefined,
      birthdate: new Date("1995-02-10"),
      greet: function () {
        return `Hello, I'm ${this.name}`;
      },
    },
  ];
  
  