using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    [Table("chars")]
    public class Chars
    {
        [Key]
        public int char_id { get; set; }

        [Column("char_name")]
        public string char_name { get; set; }

        [Column("char_status")]
        public string char_status { get; set; }

        [Column("char_species")]
        public string char_species { get; set; }

        [Column("char_type")]
        public string char_type { get; set; }

        [Column("char_gender")]
        public string char_gender { get; set; }

        [Column("char_image")]
        public string char_image { get; set; }

    }
}
