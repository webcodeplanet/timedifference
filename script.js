function calculateDifference() {
    const time1 = document.getElementById('time1').value;
    const time2 = document.getElementById('time2').value;

    if (!time1 || !time2) {
      document.getElementById('result').textContent = "Time is empty";
      return;
    }

    const [hours1, minutes1] = time1.split(':').map(Number);
    const [hours2, minutes2] = time2.split(':').map(Number);

    const totalMinutes1 = hours1 * 60 + minutes1;
    const totalMinutes2 = hours2 * 60 + minutes2;

    const difference = Math.abs(totalMinutes2 - totalMinutes1);
    const diffHours = Math.floor(difference / 60);
    const diffMinutes = difference % 60;

    document.getElementById('result').textContent = `Defference: ${diffHours} h ${diffMinutes} min.`;
  }