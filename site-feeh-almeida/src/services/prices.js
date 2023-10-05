export const tablePrices = [
  {
    title: "Alongamento Fibra Encapsulada",
    id: 1,
    price: " R$ 135,00",
    durance: 2.3,
  },
  {
    title: "Alongamento Fibra Comum",
    id: 2,
    price: " R$ 110,00",
    durance: 2.3,
  },
  {
    title: "Alongamento soft gel",
    id: 13,
    price: " R$ 110,00",
    durance: 1.3,
  },
  {
    title: "Alongamento molde russo",
    id: 12,
    price: " R$ 110,00",
    durance: 2.0,
  },

  {
    title: "Banho De Gel",
    id: 3,
    price: " R$ 90,00",
    durance: 1.3,
  },
  {
    title: "Blindagem ",
    id: 11,
    price: " R$ 90,00",
    durance: 1.0,
  },
  {
    title: "Blindagem manutenção ",
    id: 14,
    price: " R$ 90,00",
    durance: 1.0,
  },
  {
    title: "Esmaltação Em Gel",
    id: 4,
    price: " R$ 35,00",
    durance: 2.3,
  },

  {
    title: "Manutenção Banho De Gel",
    id: 6,
    price: " R$ 60,00",
    durance: 1.3,
  },
  {
    title: "Manutenção Fibra 15-20 Dias",
    id: 7,
    price: " R$ 85,00",
    durance: 1.3,
  },
  {
    title: "Manutenção Fibra 20-30 Dias",
    id: 8,
    price: " R$ 95,00",
    durance: 1.3,
  },
  {
    title: "Manutenção Encapsulada 15-20 Dias",
    id: 9,
    price: " R$ 100,00",
    durance: 1.3,
  },
  {
    title: "Manutenção Encapsulada 20-30 Dias",
    id: 10,
    price: " R$ 115,00",
    durance: 1.3,
  },
];

export const tableAdditionalServices = [
  {
    title: "Pé",
    id: 1,
    price: " R$ 26,00",
    durance: 1.0,
  },
  {
    title: "Esmaltação Em Gel",
    id: 2,
    price: " R$ 35,00",
    durance: 1.0,
  },
  {
    title: "Decoração à partir",
    id: 3,
    price: " R$ 20,00",
    durance: 0.3,
  },
  {
    title: "Mão Comum ",
    id: 4,
    price: " R$ 24,00",
    durance: 0.4,
  },
];

/*   let duranceTotal = 0;
  daySelect.forEach((item) => {
    duranceTotal += item.durance.reduce((acc, val) => acc + parseFloat(val), 0);
  });

  const calculateAvailableTimes = () => {
    const busyTimes = daySelect.map((item) => {
      const timeParts = item.time.split(":");
      const hours = parseInt(timeParts[0], 10);
      const minutes = parseInt(timeParts[1], 10);
      return setMinutes(
        setSeconds(setMilliseconds(setHours(new Date(), hours), minutes), 0),
        0
      );
    });

    const availableTimes = [];

    let currentTime = setHours(setMinutes(new Date(), 0), 8);

    while (currentTime <= setHours(setMinutes(new Date(), 0), 18)) {
      const endTime = new Date(
        currentTime.getTime() + duranceTotal * 60 * 60 * 1000
      );

      let isAvailable = true;

      for (const busyTime of busyTimes) {
        if (busyTime >= currentTime && busyTime < endTime) {
          isAvailable = false;
          break;
        }
      }

      if (isAvailable) {
        availableTimes.push(new Date(currentTime));
      }

      currentTime = new Date(currentTime.getTime() + 30 * 60 * 1000); // Incremento de 30 minutos
    }

    return availableTimes;
  };

  const availableTimes = calculateAvailableTimes(); */
