function calculateAge(event) {
    event.preventDefault();
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    if (!day || !month || !year) {
        document.getElementById('result').innerText = 'Please enter a valid date.';
        return;
    }

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); 
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById('result').innerText = `You are ${years} years, ${months} months, and ${days} days old.`;
}