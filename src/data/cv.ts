export const summary =
  'Software engineer with 3+ years at Tesla building production Go and Python systems across high-voltage energy storage, humanoid robotics, and vehicle platforms. Primary author and maintainer of the shared Go instrument-driver and hardware-abstraction libraries (375+ commits across two core repos, 9 instrument vendors) that test systems in Fremont, Lathrop, Shanghai, and contract-manufacturer sites depend on. Depth in UDS / ISO 14229 diagnostics and firmware download, CAN, gRPC services, concurrent state-machine architectures with strict timeout and fault semantics, and the SQL and analytics layer that turns test data into yield decisions.';

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
      'Instrument Driver & HAL Platform (Golang): primary author and top contributor of two shared Go libraries — a VISA/SCPI instrument-driver layer and a hardware-abstraction layer — with 375+ commits, consumed by test systems across multiple factories. Drivers for 9 instrument vendors (Chroma, Keysight, Keithley, TDK, Itech, Magna, Siglent, NI, WAGO). Designed the 3-layer architecture and ~200 SCPI commands for the Chroma hipot family.',
      'Megapack Thermal System (Golang, SCPI, ECU, Linux): top software contributor on an HV test system projected to save USD 104M/year. Multi-system tester covering Hipot, LV, HV and pneumatic actuation; owned thermal and coolant-flow health monitoring. Co-authored the Pilz safety program, obtained safety buyoffs at 220V and 250V.',
      'Safety Controller FVT (Golang, UDS, gRPC, CAN): co-maintainer of a state-machine application fronting a gRPC/protobuf bridge to CAN and UDS. Implemented the full ISO 14229 flashing sequence — security access, bootloader entry, a 21-minute application download under a 30-minute context, genealogy writes by DID. Median-of-N sampling with CAN-MUX-aligned timing to prevent aliasing.',
      'BMS Communication Station (Python, CAN): CAN-bus polling station catching broken BMS chain-communication faults invisible to existing EOL testers — preventing ~USD 2M/week in throughput loss on a 4,800-unit/week line.',
      'Manufacturing Data & OEE Analytics (SQL, Power BI, Python): architected a PLC-to-SQL diagnostic pipeline across 18 HV converter testers, reaching 99.6% first-pass yield — highest in Tesla Energy. Maintain a 100+ query SQL analytics library.',
      'Telemetry Daemon (Linux, OPC UA): daemon monitoring 200+ Siemens OPC UA nodes with automated fault alerting and recovery orchestration, reducing downtime 65%.',
      'Humanoid Robotics — Optimus: drove Charger EOL first-pass yield from 0% to 80% during NPI by debugging ECU firmware via CANape, DBC decoding and HEX analysis. Integrated AWS S3 as a centralized CAN-log trace store.',
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
