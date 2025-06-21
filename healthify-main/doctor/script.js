// const doctors = [
//     {
//       id: 1,
//       name: "Dr. Sarah Wilson",
//       specialty: "Cardiologist",
//       rating: 4.9,
//       patients: 1500,
//       experience: "15 years",
//       location: "New York, NY",
//       availability: "Next available: Today",
//       image: "/placeholder.svg?height=400&width=400",
//       backgroundColor: "from-rose-500/20 to-rose-500/5"
//     },
//     {
//       id: 2,
//       name: "Dr. Michael Chen",
//       specialty: "Neurologist",
//       rating: 4.8,
//       patients: 1200,
//       experience: "12 years",
//       location: "Los Angeles, CA",
//       availability: "Next available: Tomorrow",
//       image: "/placeholder.svg?height=400&width=400",
//       backgroundColor: "from-blue-500/20 to-blue-500/5"
//     },
//     {
//       id: 3,
//       name: "Dr. Emily Parker",
//       specialty: "Dermatologist",
//       rating: 4.7,
//       patients: 2000,
//       experience: "10 years",
//       location: "Chicago, IL",
//       availability: "Next available: Today",
//       image: "/placeholder.svg?height=400&width=400",
//       backgroundColor: "from-purple-500/20 to-purple-500/5"
//     },
//     {
//       id: 4,
//       name: "Dr. James Thompson",
//       specialty: "Orthopedist",
//       rating: 4.9,
//       patients: 1800,
//       experience: "20 years",
//       location: "Houston, TX",
//       availability: "Next available: Tomorrow",
//       image: "/placeholder.svg?height=400&width=400",
//       backgroundColor: "from-emerald-500/20 to-emerald-500/5"
//     },
//     {
//       id: 5,
//       name: "Dr. Lisa Rodriguez",
//       specialty: "Pediatrician",
//       rating: 4.8,
//       patients: 2500,
//       experience: "14 years",
//       location: "Miami, FL",
//       availability: "Next available: Today",
//       image: "/placeholder.svg?height=400&width=400",
//       backgroundColor: "from-amber-500/20 to-amber-500/5"
//     }
//   ];
  
//   const container = document.getElementById("doctor-cards-container");
  
//   doctors.forEach(doctor => {
//     const card = document.createElement("div");
//     card.classList.add("card");
    
//     card.innerHTML = `
//       <div class="background-gradient" style="background: linear-gradient(to bottom right, #f56565, #ed64a6);"></div>
//       <div class="card-content">
//         <div class="card-header">
//           <div class="doctor-info">
//             <div class="doctor-image">
//               <img src="${doctor.image}" alt="${doctor.name}">
//               <div class="online-status"></div>
//             </div>
//             <div>
//               <h3 class="text-lg font-semibold">${doctor.name}</h3>
//               <p class="text-sm">${doctor.specialty}</p>
//             </div>
//           </div>
//           <button class="heart-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s8-4 8-10c0-4-4-6-8-6s-8 2-8 6c0 6 8 10 8 10z"></path></svg></button>
//         </div>
//         <div class="card-body">
//           <div><strong>Rating:</strong> ${doctor.rating} <span>⭐</span></div>
//           <div><strong>Patients:</strong> ${doctor.patients}+ <span>👥</span></div>
//           <div><strong>Experience:</strong> ${doctor.experience} <span>🩺</span></div>
//           <div><strong>Location:</strong> ${doctor.location} <span>📍</span></div>
//         </div>
//         <div class="card-footer">
//           <p><strong>Availability:</strong> ${doctor.availability}</p>
//           <button class="button">Book Appointment</button>
//         </div>
//       </div>
//     `;
    
//     container.appendChild(card);
//   });
  