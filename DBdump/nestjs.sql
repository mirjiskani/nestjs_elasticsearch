-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 18, 2023 at 01:23 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nestjs`
--

-- --------------------------------------------------------

--
-- Table structure for table `films`
--

CREATE TABLE `films` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `release_date` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `films`
--

INSERT INTO `films` (`id`, `name`, `description`, `price`, `release_date`, `created_at`, `updated_at`) VALUES
(1, 'Test Movie', 'This is the test descript for test movie', '203.30', '2023-02-01', '2023-05-16 19:30:27', '2023-05-17 00:30:27'),
(2, 'Test Film 1', 'This is the test description for test film4', '3266.20', '2023-05-23', '2023-05-17 19:03:10', '2023-05-18 00:03:10'),
(3, 'Test Film 2', 'This is the test description for test film2', '3266.20', '2023-05-23', '2023-05-17 19:03:19', '2023-05-18 00:03:19'),
(4, 'Test Film 3', 'This is the test description for test film3', '3266.20', '2023-05-23', '2023-05-17 19:03:27', '2023-05-18 00:03:27'),
(5, 'Test Film 4', 'This is the test description for test film4', '3266.20', '2023-05-23', '2023-05-17 19:03:36', '2023-05-18 00:03:36'),
(6, 'Test Film 23', 'This is the test description for test film4', '3266.20', '2023-05-23', '2023-05-17 22:49:36', '2023-05-18 03:49:36'),
(7, 'Test Film 3423432', 'This is the test description for test film4', '3266.20', '2023-05-23', '2023-05-17 23:10:40', '2023-05-18 04:10:40');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(11) NOT NULL,
  `timestamp` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `timestamp`, `name`) VALUES
(1, 1684235921840, 'Flims1684235921840'),
(2, 1684235942574, 'User1684235942574'),
(3, 1684263077972, 'Rating1684263077972');

-- --------------------------------------------------------

--
-- Table structure for table `rating`
--

CREATE TABLE `rating` (
  `id` int(11) NOT NULL,
  `filmid` int(11) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  `ratings` decimal(2,1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rating`
--

INSERT INTO `rating` (`id`, `filmid`, `uid`, `ratings`, `created_at`, `updated_at`) VALUES
(1, 4, 1, '2.3', '2023-05-17 19:09:51', '2023-05-18 00:09:51'),
(2, 1, 2, '2.3', '2023-05-17 19:10:02', '2023-05-18 00:10:02'),
(3, 1, 12, '2.3', '2023-05-17 22:50:41', '2023-05-18 03:50:41'),
(4, 1, 13, '2.3', '2023-05-17 22:50:52', '2023-05-18 03:50:52');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `isActive` tinyint(1) DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `LastName`, `FirstName`, `password`, `email`, `isActive`, `created_at`, `updated_at`) VALUES
(1, 'Jiskani', 'Mir Khan', '$2a$10$MPa2psyITdX/jLaAb6ZxWuzgBqkw5BfYf0fYxbjWN.dlGre9DygCK', 'waseem@mir.com', 1, '2023-05-17 19:01:34', '2023-05-18 01:11:52'),
(2, 'Jiskani', 'Mir Khan', '$2a$10$MPa2psyITdX/jLaAb6ZxWuzgBqkw5BfYf0fYxbjWN.dlGre9DygCK', 'mir@mir.com', 1, '2023-05-17 19:01:53', '2023-05-18 01:11:48'),
(3, 'Khan', 'Mir ', '$2a$10$MPa2psyITdX/jLaAb6ZxWuzgBqkw5BfYf0fYxbjWN.dlGre9DygCK', 'mir@khan.com', 1, '2023-05-17 19:10:31', '2023-05-18 01:11:54'),
(4, 'Khan', 'Mir ', '$2a$10$MPa2psyITdX/jLaAb6ZxWuzgBqkw5BfYf0fYxbjWN.dlGre9DygCK', 'mir1@khan.com', 1, '2023-05-17 20:12:33', '2023-05-18 01:15:11'),
(5, 'Khan', 'Mir ', '$2a$10$MPa2psyITdX/jLaAb6ZxWuzgBqkw5BfYf0fYxbjWN.dlGre9DygCK', 'mir2@khan.com', 1, '2023-05-17 20:14:48', '2023-05-18 01:15:15'),
(6, 'Khan', 'Mir ', '$2a$10$AAAWCdwN3M98.xF88vij5OatgpbiuHYuGRMjKjQvwJEX4cCFPVtzW', 'mir3@khan.com', 1, '2023-05-17 20:16:48', '2023-05-18 01:19:10'),
(7, 'Khan', 'Mir ', '$2a$10$AAAWCdwN3M98.xF88vij5OatgpbiuHYuGRMjKjQvwJEX4cCFPVtzW', 'mir23@khan.com', 1, '2023-05-17 20:17:17', '2023-05-18 01:19:14'),
(8, 'Khan', 'Mir ', '$2a$10$AAAWCdwN3M98.xF88vij5OatgpbiuHYuGRMjKjQvwJEX4cCFPVtzW', 'mir5@khan.com', 1, '2023-05-17 20:18:23', '2023-05-18 01:19:05'),
(9, 'Khan', 'Mir ', '$2a$10$AAAWCdwN3M98.xF88vij5OatgpbiuHYuGRMjKjQvwJEX4cCFPVtzW', 'mir45@khan.com', 1, '2023-05-17 20:18:49', '2023-05-18 01:18:49'),
(10, 'Khan', 'Mir ', '$2a$10$DVvKyligHDHARfFBErcezO4o/NIjYXck7KmeWhB36oHg19QT0I3sS', 'mir9@khan.com', 1, '2023-05-17 20:22:03', '2023-05-18 01:22:03'),
(11, 'Khan', 'Mir ', '', 'mir10@khan.com', 1, '2023-05-17 20:22:56', '2023-05-18 01:22:56'),
(12, 'Baloch', 'Mir Khan Jiskani', '$2a$10$uxtAR/TX7UueKwo1t7hBnOr0TuDnZtz53.EsRopwKjOBjxASLwCpS', 'mir@test.com', 1, '2023-05-17 20:25:28', '2023-05-18 01:31:17'),
(13, 'Khan', 'Mir ', '$2a$10$wQLVlfxtdwpoc.fM6wTs.OmTPg70yNzyuCF8Gj8yO2SNOCJEr0Tce', 'mirfff@test.com', 1, '2023-05-17 22:49:46', '2023-05-18 03:49:46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `films`
--
ALTER TABLE `films`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rating`
--
ALTER TABLE `rating`
  ADD PRIMARY KEY (`id`),
  ADD KEY `filmid` (`filmid`),
  ADD KEY `uid` (`uid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `films`
--
ALTER TABLE `films`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `rating`
--
ALTER TABLE `rating`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `rating`
--
ALTER TABLE `rating`
  ADD CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`filmid`) REFERENCES `films` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `rating_ibfk_2` FOREIGN KEY (`uid`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
