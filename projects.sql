-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 12, 2025 at 10:04 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react`
--

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text DEFAULT NULL,
  `imgURL` varchar(255) DEFAULT NULL,
  `tags` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`tags`)),
  `category` varchar(100) DEFAULT NULL,
  `githubURL` varchar(255) DEFAULT NULL,
  `websiteURL` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `title`, `content`, `imgURL`, `tags`, `category`, `githubURL`, `websiteURL`, `created_at`) VALUES
(1, 'Hurst Point Archers', 'Hurst Point Archers is a fictional archery club based on the south-coast of the UK.', 'hpa.png', '[\"Photoshop\", \"XD\"]', 'design', 'https://www.behance.net/gallery/227652293/Hurst-Point-Archers-(Landing-Page)', 'https://www.behance.net/gallery/227652293/Hurst-Point-Archers-(Landing-Page)', '2025-06-11 06:01:05'),
(2, 'Feedback-form-plugin', 'A fully accessible, dynamic feedback form built using HTML, CSS, vanilla JavaScript, and PHP with optional integration as a WordPress plugin.', 'form-validate-plugin.png', '[\"Wordpress\", \"PHP\"]', 'development', 'https://github.com/CarlHumm/feedback-form-pie', 'https://github.com/CarlHumm/feedback-form-pie', '2025-06-11 06:01:05'),
(3, 'New Seasons Florist Brochure Site', 'A repurposed old theme built on WordPress using Timber/Twig. ', 'seasons.png', '[\"Wordpress\", \"Timber\", \"Twig\"]', 'development', 'https://github.com/CarlHumm/Florist-Wordpress', 'https://github.com/CarlHumm/Florist-Wordpress', '2025-06-11 06:01:05');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
