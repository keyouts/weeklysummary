 function loadHabits() {
      return JSON.parse(localStorage.getItem('habits')) || {};
    }

    function renderSummary() {
      const habits = loadHabits();
      const summaryList = document.getElementById('summaryList');
      summaryList.innerHTML = '';

      Object.keys(habits).forEach(habit => {
        const checkIns = habits[habit].filter(Boolean).length;
        const item = document.createElement('div');
        item.className = 'summary-item';
        item.innerHTML = `<span>${habit}</span><span>${checkIns} / 7</span>`;
        summaryList.appendChild(item);
      });
    }

    renderSummary();