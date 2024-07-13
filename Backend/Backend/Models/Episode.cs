using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    [Table("episodes")]
    public class Episode
    {
        [Key]
        public int episode_id { get; set; }

        [Column("episode_name")]
        public string episode_name { get; set; }

        [Column("episode_airdate")]
        public string episode_airdate { get; set; }

        [Column("episode_episode")]
        public string episode_episode { get; set; }
    }
}
