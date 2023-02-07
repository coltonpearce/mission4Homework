using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace mission4Homework.Models
{
    public class GradeCalculatorModel
    {
        [Required]
        [Range(0, 100,
            ErrorMessage ="Input for assignments must be between 0-100")]
        public float assignments { get; set; }

        [Required]
        [Range(0, 100,
            ErrorMessage = "Input for group projects must be between 0-100")]
        public float group { get; set; }

        [Required]
        [Range(0, 100,
            ErrorMessage = "Input for quizzes must be between 0-100")]
        public float quizzes { get; set; }

        [Required]
        [Range(0, 100,
            ErrorMessage = "Input for the midterm exam must be between 0-100")]
        public float midterm { get; set; }

        [Required]
        [Range(0, 100,
            ErrorMessage = "Input for the final exam must be between 0-100")]
        public float final { get; set; }

        [Required]
        [Range(0, 100,
            ErrorMessage = "Input for intex must be between 0-100")]
        public float intex { get; set; }
    }
}
