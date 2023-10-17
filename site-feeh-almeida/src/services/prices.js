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
    durance: 150,
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
    durance: 30,
  },
  {
    title: "Mão Comum ",
    id: 4,
    price: " R$ 24,00",
    durance: 70,
  },
];

/*   const calculateTotalDuration = (item) => {
    const totalDuration = item.durance
      .filter((duration) => duration !== null)
      .map((d) => parseFloat(d))
      .filter((d) => !isNaN(d));

    return totalDuration.length > 0
      ? totalDuration.reduce((acc, val) => acc + val, 0)
      : 0;
  };

  const calculateAvailableTimes = () => {
    const duranceTotal = daySelect.reduce((acc, item) => {
      const maxDuration = calculateTotalDuration(item);
      return acc + maxDuration;
    }, 0);

    const selectedTime = format(startTime, "HH:mm");

    const busyTimesBeforeAppointment = daySelect
      .filter((item) => item.time < selectedTime)
      .map((item) => {
        const totalDuration = item.durance
          .filter((d) => d !== null)
          .map((d) => parseFloat(d))
          .filter((d) => !isNaN(d))
          .reduce((acc, val) => acc + val, 0);

        const [hours, minutes] = item.time.split(":");
        const startTime = setHours(
          setMinutes(new Date(), minutes),
          parseInt(hours, 10)
        );
        const endTime = addMinutes(startTime, totalDuration);
        return endTime;
      });

    const availableTimes = [];
    const workingStart = setHours(setMinutes(new Date(), 0), 8);
    const workingEnd = setHours(setMinutes(new Date(), 0), 18);
    let currentTime = workingStart;

    while (currentTime <= workingEnd) {
      const endTime = addMinutes(currentTime, duranceTotal);

      const isAvailable = busyTimesBeforeAppointment.every(
        (busyTime) => busyTime < currentTime || busyTime >= endTime
      );

      if (isAvailable) {
        availableTimes.push(new Date(currentTime));
      }

      const duranceOfCurrentService = daySelect
        .filter((item) => format(currentTime, "HH:mm") === item.time)
        .map((item) => item.durance || ["30"])
        .flat()
        .map((d) => parseFloat(d))
        .filter((d) => !isNaN(d));

      const totalDurance =
        duranceOfCurrentService.length > 0
          ? Math.max(...duranceOfCurrentService)
          : 30;
      currentTime = addMinutes(currentTime, totalDurance);
    }

    return availableTimes;
  };

  const availableTimes = calculateAvailableTimes(); */
