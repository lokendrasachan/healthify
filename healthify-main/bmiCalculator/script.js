document.addEventListener("DOMContentLoaded", function () {
    const unitSelector = document.querySelectorAll("input[name='unit']");
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const calculateBtn = document.getElementById("calculate-btn");
    const resultContainer = document.getElementById("result");
    const bmiResult = document.getElementById("bmi-result");
    const bmiCategory = document.getElementById("bmi-category");
    const heightLabel = document.getElementById("height-label");
    const weightLabel = document.getElementById("weight-label");
    const goBackBtn = document.getElementById("go-back-btn");
  
    let unit = "metric";
  
    unitSelector.forEach((radio) => {
      radio.addEventListener("change", (e) => {
        unit = e.target.value;
        updateLabels();
      });
    });
  
    calculateBtn.addEventListener("click", () => {
      const height = parseFloat(heightInput.value);
      const weight = parseFloat(weightInput.value);
  
      if (!height || !weight) return;
  
      let bmiValue;
      if (unit === "metric") {
        bmiValue = weight / ((height / 100) * (height / 100));
      } else {
        bmiValue = (weight * 703) / (height * height);
      }
  
      const roundedBmi = Math.round(bmiValue * 10) / 10;
      bmiResult.textContent = `Your BMI: ${roundedBmi}`;
      bmiCategory.textContent = `Category: ${getBMICategory(roundedBmi)}`;
      resultContainer.classList.remove("hidden");
    });
  
    goBackBtn.addEventListener("click", () => {
      heightInput.value = "";
      weightInput.value = "";
      resultContainer.classList.add("hidden");
      unitSelector.forEach((radio) => (radio.checked = false));
      unitSelector[0].checked = true; // Default to metric
    });
  
    function getBMICategory(bmi) {
      if (bmi < 18.5) return "Underweight";
      if (bmi < 25) return "Normal weight";
      if (bmi < 30) return "Overweight";
      return "Obese";
    }
  
    function updateLabels() {
      if (unit === "metric") {
        heightLabel.textContent = "Height (cm)";
        weightLabel.textContent = "Weight (kg)";
        heightInput.placeholder = "Enter height in cm";
        weightInput.placeholder = "Enter weight in kg";
      } else {
        heightLabel.textContent = "Height (inches)";
        weightLabel.textContent = "Weight (lbs)";
        heightInput.placeholder = "Enter height in inches";
        weightInput.placeholder = "Enter weight in lbs";
      }
    }
  });


  function goBack() {
    if (document.referrer) {
      window.history.back(); // Navigate to the previous page if possible
    } else {
      // Fallback: If no referrer, redirect to a specific page (e.g., the homepage)
      window.location.href = '/';

    }
}