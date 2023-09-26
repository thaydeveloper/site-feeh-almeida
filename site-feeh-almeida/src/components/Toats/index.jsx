import { notification } from "antd";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import { RiAlertLine } from "react-icons/ri";
import { FiAlertCircle } from "react-icons/fi";

export const showSuccessNotification = (message) => {
  notification.success({
    message: (
      <span
        style={{
          color: "#5D8A33",
          fontWeight: "600",
          lineHeight: "20px",
          fontSize: "14px",
        }}
      >
        {message}
      </span>
    ),
    icon: <MdOutlineCheckCircleOutline style={{ color: "#6EA43D" }} />,
    placement: "top",
    style: {
      background:
        "linear-gradient(0deg, rgba(110, 164, 61, 0.1), rgba(110, 164, 61, 0.1)), #FFFFFF",
      border: "2px solid #6EA43D",
    },
    closeIcon: null,
  });
};

export const showWarningNotification = (message) => {
  notification.warning({
    message: (
      <span
        style={{
          color: "#755000",
          fontWeight: "600",
          lineHeight: "20px",
          fontSize: "14px",
        }}
      >
        {message}
      </span>
    ),
    icon: <RiAlertLine style={{ color: "#F5A700" }} />,
    placement: "top",
    style: {
      background:
        "linear-gradient(0deg, rgba(245, 167, 0, 0.1), rgba(245, 167, 0, 0.1)), #FFFFFF",
      border: "2px solid #F5A700",
    },
    closeIcon: null,
  });
};

export const showErrorNotification = (message) => {
  notification.error({
    message: (
      <span
        style={{
          color: "#801620",
          fontWeight: "600",
          lineHeight: "20px",
          fontSize: "14px",
        }}
      >
        {message}
      </span>
    ),
    icon: <FiAlertCircle style={{ color: "#C02130" }} />,
    placement: "top",
    style: {
      background:
        "linear-gradient(0deg, rgba(192, 33, 48, 0.1), rgba(192, 33, 48, 0.1)), #FFFFFF",
      border: "2px solid #C02130",
    },
    closeIcon: null,
  });
};
