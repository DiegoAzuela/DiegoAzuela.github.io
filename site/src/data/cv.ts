export const summary =
  'Software engineer with 3+ years at Tesla building production Go and Python systems across high-voltage energy storage, humanoid robotics, and vehicle platforms.';

export interface Role {
  org: string;
  title: string;
  period: string;
  location: string;
  group?: string;
  points: string[];
}

export const experience: Role[] = [
  {
    org: 'Tesla, Inc.',
    title: 'Launch Engineer',
    period: 'Mar 2023 — Present',
    location: 'California',
    group: 'Energy Division — Software Development',
    points: [
      'Instrument Driver & HAL Platform (Golang): primary author and top contributor of two shared Go libraries — a VISA/SCPI instrument-driver layer and a hardware-abstraction layer — consumed by test systems across multiple factories. Drivers for nine instrument vendors (Chroma, Keysight, Keithley, TDK, Itech, Magna, Siglent, NI, WAGO). Designed the 3-layer architecture and the SCPI command library for the Chroma hipot family; lifted instrument config into the shared HAL so new stations integrate by config, not code.',
      'Megapack Thermal System (Golang, SCPI, ECU, Linux): top software contributor on an HV test system covering Hipot, LV, HV and pneumatic actuation for coolant flow and leak detection; owned thermal and coolant-flow health monitoring. Co-authored the Pilz safety program and obtained safety buyoffs at 220V and 250V.',
      'Safety Controller FVT (Golang, UDS, gRPC, CAN): co-maintainer of a functional verification tester built as a state-machine application fronting a gRPC/protobuf bridge to CAN and UDS services. Implemented the full ISO 14229 flashing sequence — security access, bootloader entry by ECU reset with tester-present, application download under a dedicated context, genealogy writes by DID. Median-of-N sampling with CAN-MUX-aligned timing to prevent aliasing.',
      'BMS Communication Station (Python, CAN): CAN-bus polling station catching broken BMS chain-communication faults invisible to existing end-of-line testers.',
      'Manufacturing Data & OEE Analytics (SQL, Power BI, Python): architected a PLC-to-SQL diagnostic pipeline across the HV converter testers; maintain a large SQL analytics library covering failure-mode analysis, SCADA availability and OEE.',
      'Telemetry Daemon (Linux, OPC UA): daemon monitoring 200+ Siemens OPC UA nodes with automated fault alerting and recovery orchestration.',
      'Humanoid Robotics — Optimus: brought up the Charger end-of-line tester during NPI — ECU firmware debugging via CANape, DBC decoding and HEX analysis. Integrated AWS S3 as a centralized trace store for CAN logs.',
      'Test platform tooling: consolidated a duplicated test runner into one shared repository used across sites; built a Go parser generating safety documentation from Pilz PNOZ files, DBC revision diffing, and automated alerting.',
      'Vehicles Division: led BMS integration and wireless-charging test deployment at contract-manufacturer sites in Mexico and the USA.',
    ],
  },
];

export const research: Role[] = [
  {
    org: 'Harvard Medical School, Brigham and Women’s Hospital',
    title: 'Research Intern',
    period: 'Jul 2021 — Feb 2022',
    location: 'Cambridge, MA',
    points: [
      'Developed Python control software for a 6-DOF robotic bioprinter using OpenCV depth sensing and computational-geometry path planning; validated deposition accuracy end-to-end. Published in Advanced Materials Technologies, 2024.',
      'Built an electrochemical-biosensor data-acquisition and signal-processing pipeline integrated into a microfluidic bioreactor for real-time stem-cell monitoring. Published in ACS Sensors, 2024.',
    ],
  },
];

export const education = [
  {
    org: 'Tecnológico de Monterrey (ITESM)',
    degree: 'B.Sc. Mechatronics Engineering',
    detail: 'GPA 3.73',
    period: '2017 — 2023',
  },
  {
    org: 'Penn State University',
    degree: 'B.Sc. Mechanical Engineering',
    detail: "GPA 3.75 · Dean's List",
    period: '2016 — 2017',
  },
];

export const skills: { group: string; items: string }[] = [
  { group: 'Languages', items: 'Golang, Python, SQL, C++, Shell, Bash, LabVIEW, TestStand, MATLAB' },
  {
    group: 'Software engineering',
    items:
      'Go concurrency (goroutines, context, channels), gRPC & protobuf, REST integration, state-machine architecture, driver & library design, code review, semantic versioning & release tagging',
  },
  {
    group: 'Protocols',
    items:
      'CAN bus, UDS / ISO 14229 (DIDs, security access, bootloader, FWDL), CANape, DBC, PCAN, HEX, OPC UA, SCPI & VISA, Modbus TCP, I2C, SPI, PLC, ECU firmware',
  },
  {
    group: 'Infrastructure',
    items: 'Linux (systemd), AWS S3, MySQL, Docker, CI/CD, pytest, Git, Ansible, Power BI, OpenCV',
  },
  {
    group: 'Methods',
    items: 'SPC, Gage R&R, fault injection, FMEA, NPI, DVT, PVT, V&V, root-cause analysis',
  },
  { group: 'Spoken', items: 'English (TOEFL 640), Spanish (native), French & Italian (intermediate)' },
];
