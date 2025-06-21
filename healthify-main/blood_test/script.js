// document.addEventListener('DOMContentLoaded', function () {
//     const metrics = [
//       { name: 'Blood Sugar', value: '', unit: 'mg/dL', normalRange: '70-100', status: null },
//       { name: 'Platelets', value: '', unit: 'K/µL', normalRange: '150-450', status: null },
//       { name: 'Hemoglobin', value: '', unit: 'g/dL', normalRange: '12-16', status: null },
//       { name: 'Iron', value: '', unit: 'µg/dL', normalRange: '60-170', status: null },
//     ];
  
//     const tableBody = document.querySelector('#metrics-table tbody');
//     const summaryList = document.querySelector('#summary-list');
//     const summarySection = document.querySelector('#summary');
    
//     // Calculate status based on value and normal range
//     const calculateStatus = (value, range) => {
//       const [min, max] = range.split('-').map(Number);
//       if (value < min) return 'low';
//       if (value > max) return 'high';
//       return 'normal';
//     };
  
//     // Update table rows
//     const updateTable = () => {
//       tableBody.innerHTML = '';
//       metrics.forEach((metric, index) => {
//         const row = document.createElement('tr');
  
//         row.innerHTML = `
//           <td>${metric.name}</td>
//           <td>
//             <input type="number" value="${metric.value}" 
//                    data-index="${index}" 
//                    placeholder="Enter ${metric.name.toLowerCase()}" />
//             <span>${metric.unit}</span>
//           </td>
//           <td>${metric.normalRange}</td>
//           <td class="status-${metric.status || 'normal'}">
//             ${metric.status ? metric.status.charAt(0).toUpperCase() + metric.status.slice(1) : '-'}
//           </td>
//         `;
//         tableBody.appendChild(row);
//       });
//     };
  
//     // Handle value change
//     tableBody.addEventListener('input', (event) => {
//       if (event.target.tagName.toLowerCase() === 'input') {
//         const index = event.target.dataset.index;
//         const value = event.target.value;
  
//         metrics[index].value = value;
//         metrics[index].status = value ? calculateStatus(Number(value), metrics[index].normalRange) : null;
  
//         updateTable();
//         updateSummary();
//       }
//     });
  
//     // Update summary
//     const updateSummary = () => {
//       summaryList.innerHTML = '';
//       const filteredMetrics = metrics.filter((m) => m.status);
  
//       if (filteredMetrics.length > 0) {
//         summarySection.classList.remove('hidden');
//         filteredMetrics.forEach((metric) => {
//           const listItem = document.createElement('li');
//           listItem.className = `status-${metric.status}`;
//           listItem.textContent = `${metric.name}: ${metric.value} ${metric.unit} - ${metric.status.toUpperCase()}`;
//           summaryList.appendChild(listItem);
//         });
//       } else {
//         summarySection.classList.add('hidden');
//       }
//     };
  
//     // Initial table rendering
//     updateTable();
//   });
  