export class ProjectsService {
  projects = [
    {
      id: 1,
      name: 'Titre du projet numero 1',
      description : "Quisque enim. Proin velit neque, tristique eu, eleifend eget, vestibulum nec, lacus. Vivamus odio. Duis odio urna, vehicula in, elementum aliquam, aliquet laoreet, tellus. Sed velit. Sed vel mi ac elit aliquet interdum. Etiam sapien neque, convallis et, aliquet vel, auctor non, arcu. Aliquam suscipit aliquam lectus. Proin tincidunt magna sed wisi. Integer blandit lacus ut lorem. Sed luctus justo sed enim  Donec ac velit. Sed convallis vestibulum sapien. Vivamus tempor lacus sed lacus. Nunc ut lorem. Ut et tortor. Nullam varius wisi at diam. Etiam ultricies, dolor sit amet fermentum vulputate, neque libero vestibulum orci, vitae fringilla neque arcu aliquet ante. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quisque venenatis lobortis augue. Sed tempor, tellus iaculis pellentesque pharetra, pede dui malesuada mauris, vel ultrices urna mauris ac nibh. Etiam nibh odio, ultricies vehicula, vestibulum vitae, feugiat eleifend, felis. Vivamus pulvinar. Aliquam erat volutpat. Nulla egestas venenatis metus. Nam feugiat nunc quis elit egestas sagittis. Sed vitae felis. In libero arcu, rhoncus in, commodo eget, auctor in, enim. Vivamus suscipit est. Nulla dapibus, magna vel aliquet egestas, massa massa hendrerit lacus, ac rutrum tellus tellus sit amet felis. Cras viverra.",
      img: 'https://www.lilo.org/wp-content/uploads/2020/06/colibri_visuel-300x220.jpg'
    },
    {
      id: 2,
      name: 'Titre du projet numero 2',
      description : "Quisque enim. Proin velit neque, tristique eu, eleifend eget, vestibulum nec, lacus. Vivamus odio. Duis odio urna, vehicula in, elementum aliquam, aliquet laoreet, tellus. Sed velit. Sed vel mi ac elit aliquet interdum. Etiam sapien neque, convallis et, aliquet vel, auctor non, arcu. Aliquam suscipit aliquam lectus. Proin tincidunt magna sed wisi. Integer blandit lacus ut lorem. Sed luctus justo sed enim  Donec ac velit. Sed convallis vestibulum sapien. Vivamus tempor lacus sed lacus. Nunc ut lorem. Ut et tortor. Nullam varius wisi at diam. Etiam ultricies, dolor sit amet fermentum vulputate, neque libero vestibulum orci, vitae fringilla neque arcu aliquet ante. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quisque venenatis lobortis augue. Sed tempor, tellus iaculis pellentesque pharetra, pede dui malesuada mauris, vel ultrices urna mauris ac nibh. Etiam nibh odio, ultricies vehicula, vestibulum vitae, feugiat eleifend, felis. Vivamus pulvinar. Aliquam erat volutpat. Nulla egestas venenatis metus. Nam feugiat nunc quis elit egestas sagittis. Sed vitae felis. In libero arcu, rhoncus in, commodo eget, auctor in, enim. Vivamus suscipit est. Nulla dapibus, magna vel aliquet egestas, massa massa hendrerit lacus, ac rutrum tellus tellus sit amet felis. Cras viverra.",
      img: 'https://www.lilo.org/wp-content/uploads/2016/06/Gibbon-Born%C3%A9o-2013-Cr%C3%A9dit-Jean-Marc-Bouve-3-300x220.jpg'
    },
    {
      id: 3,
      name: 'Titre du projet numero 3',
      description : "Quisque enim. Proin velit neque, tristique eu, eleifend eget, vestibulum nec, lacus. Vivamus odio. Duis odio urna, vehicula in, elementum aliquam, aliquet laoreet, tellus. Sed velit. Sed vel mi ac elit aliquet interdum. Etiam sapien neque, convallis et, aliquet vel, auctor non, arcu. Aliquam suscipit aliquam lectus. Proin tincidunt magna sed wisi. Integer blandit lacus ut lorem. Sed luctus justo sed enim  Donec ac velit. Sed convallis vestibulum sapien. Vivamus tempor lacus sed lacus. Nunc ut lorem. Ut et tortor. Nullam varius wisi at diam. Etiam ultricies, dolor sit amet fermentum vulputate, neque libero vestibulum orci, vitae fringilla neque arcu aliquet ante. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quisque venenatis lobortis augue. Sed tempor, tellus iaculis pellentesque pharetra, pede dui malesuada mauris, vel ultrices urna mauris ac nibh. Etiam nibh odio, ultricies vehicula, vestibulum vitae, feugiat eleifend, felis. Vivamus pulvinar. Aliquam erat volutpat. Nulla egestas venenatis metus. Nam feugiat nunc quis elit egestas sagittis. Sed vitae felis. In libero arcu, rhoncus in, commodo eget, auctor in, enim. Vivamus suscipit est. Nulla dapibus, magna vel aliquet egestas, massa massa hendrerit lacus, ac rutrum tellus tellus sit amet felis. Cras viverra.",
      img: 'https://www.lilo.org/wp-content/uploads/2017/03/15380648_1183713215048911_6260805317756112614_n-300x220.jpg'
    }
  ];

  getProjectById(id:number){
    const project = this.projects.find(
      (projectObject)=>{
        return projectObject.id === id;
      }
    );
    return project;
  }
}
