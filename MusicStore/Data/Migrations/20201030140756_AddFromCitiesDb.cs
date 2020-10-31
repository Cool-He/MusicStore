using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MusicStore.Data.Migrations
{
    public partial class AddFromCitiesDb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
       

            migrationBuilder.CreateTable(
                name: "FromCities",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AreaName = table.Column<string>(nullable: true),
                    CountryName = table.Column<string>(nullable: true),
                    CityName = table.Column<string>(nullable: true),
                    AirportName = table.Column<string>(nullable: true),
                    AbbreCity = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FromCities", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FromCities");

            migrationBuilder.DropColumn(
                name: "Photo",
                table: "Singers");
        }
    }
}
