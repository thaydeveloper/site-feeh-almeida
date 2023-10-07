export const tablePrices = [
  {
    title: "Alongamento Fibra Encapsulada",
    id: 1,
    price: " R$ 135,00",
    durance: 150,
  },
  {
    title: "Alongamento Fibra Comum",
    id: 2,
    price: " R$ 110,00",
    durance: 120,
  },
  {
    title: "Alongamento soft gel",
    id: 13,
    price: " R$ 110,00",
    durance: 180,
  },
  {
    title: "Alongamento molde russo",
    id: 12,
    price: " R$ 110,00",
    durance: 150,
  },

  {
    title: "Banho De Gel",
    id: 3,
    price: " R$ 90,00",
    durance: 120,
  },
  {
    title: "Blindagem ",
    id: 11,
    price: " R$ 90,00",
    durance: 90,
  },
  {
    title: "Blindagem manutenção ",
    id: 14,
    price: " R$ 90,00",
    durance: 90,
  },
  {
    title: "Esmaltação Em Gel",
    id: 4,
    price: " R$ 35,00",
    durance: 120,
  },

  {
    title: "Manutenção Banho De Gel",
    id: 6,
    price: " R$ 60,00",
    durance: 120,
  },
  {
    title: "Manutenção Fibra 15-20 Dias",
    id: 7,
    price: " R$ 85,00",
    durance: 120,
  },
  {
    title: "Manutenção Fibra 20-30 Dias",
    id: 8,
    price: " R$ 95,00",
    durance: 120,
  },
  {
    title: "Manutenção Encapsulada 15-20 Dias",
    id: 9,
    price: " R$ 100,00",
    durance: 120,
  },
  {
    title: "Manutenção Encapsulada 20-30 Dias",
    id: 10,
    price: " R$ 115,00",
    durance: 120,
  },
];

export const tableAdditionalServices = [
  {
    title: "Pé",
    id: 1,
    price: " R$ 26,00",
    durance: 180,
  },
  {
    title: "Esmaltação Em Gel",
    id: 2,
    price: " R$ 35,00",
    durance: 90,
  },
  {
    title: "Decoração à partir",
    id: 3,
    price: " R$ 20,00",
    durance: 60,
  },
  {
    title: "Mão Comum ",
    id: 4,
    price: " R$ 24,00",
    durance: 70,
  },
];

/* const duranceTotal = daySelect.reduce((acc, item) => {
    const totalDurance = item.durance
      .filter((duration) => duration !== null)
      .map((d) => parseFloat(d))
      .filter((d) => !isNaN(d));

    const maxDurance = totalDurance.length > 0 ? Math.max(...totalDurance) : 0;

    return acc + maxDurance;
  }, 0);

  console.log(duranceTotal);

  const calculateBusyTimesBeforeAppointment = (selectedTime) => {
    const busyTimesBeforeAppointment = daySelect
      .filter((item) => item.time < selectedTime)
      .map((item) => {
        const totalDurance = item.durance
          .filter((duration) => duration !== null)
          .reduce((acc, val) => acc + parseFloat(val), 0);

        const timeParts = item.time.split(":");
        const hours = parseInt(timeParts[0], 10);
        const minutes = parseInt(timeParts[1], 10);

        return setHours(setMinutes(new Date(), minutes), hours + totalDurance);
      });

    return busyTimesBeforeAppointment;
  };

  const calculateAvailableTimes = () => {
    const selectedTime = format(startTime, "HH:mm");

    const busyTimesBeforeAppointment =
      calculateBusyTimesBeforeAppointment(selectedTime);

    const availableTimes = [];
    const workingStart = setHours(setMinutes(new Date(), 0), 8);
    const workingEnd = setHours(setMinutes(new Date(), 0), 18);

    let currentTime = workingStart;

    while (currentTime <= workingEnd) {
      const endTime = new Date(
        currentTime.getTime() + duranceTotal * 60 * 1000
      );

      let isAvailable = true;

      // Verificar se o horário está ocupado antes do agendamento
      for (const busyTime of busyTimesBeforeAppointment) {
        if (busyTime >= currentTime && busyTime < endTime) {
          isAvailable = false;
          break;
        }
      }

      if (isAvailable) {
        availableTimes.push(new Date(currentTime));
      }

      // Aqui é a modificação para usar a duração dinâmica de cada serviço
      const duranceOfCurrentService = daySelect
        .filter((item) => format(currentTime, "HH:mm") === item.time)
        .map((item) => item.durance || ["30"]);

      // Modificação para tratar valores nulos ou vazios
      const validDurance = duranceOfCurrentService
        .flat()
        .map((d) => parseFloat(d))
        .filter((d) => !isNaN(d));

      const totalDurance =
        validDurance.length > 0 ? Math.max(...validDurance) : 30;

      currentTime = new Date(currentTime.getTime() + totalDurance * 60 * 1000);
    }

    return availableTimes;
  };

  const availableTimes = calculateAvailableTimes(); */
