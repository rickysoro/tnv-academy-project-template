using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FilmEHistoryReview.DB.Migrations
{
    public partial class AddRatingColumnToReviewTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "rating",
                table: "review",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "rating",
                table: "review");
        }
    }
}
