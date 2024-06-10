package org.springframework.samples.petclinic.vets.config;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.util.Random;

@Component
public class DatabaseDataInitilizer {

    private final JdbcTemplate jdbcTemplate;
    private final Random random = new Random();

    public DatabaseDataInitilizer(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
        init();
    }

    private void init() {
        int numberOfInserts = 10000;
        String[] firstNames = {"Alice", "Bob", "Emma", "David", "Olivia", "Ethan", "Sophia", "Michael", "Ava", "Daniel", "Isabella", "Matthew", "Mia", "James", "Charlotte", "Alexander", "Amelia", "Benjamin", "Harper", "William"};
        String[] lastNames = {"Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin"};

        for (int i = 0; i < numberOfInserts; i++) {
            String firstName = firstNames[random.nextInt(firstNames.length)];
            String lastNameBase = lastNames[random.nextInt(lastNames.length)];

            // Check if the last name already exists
            String countSql = "SELECT COUNT(*) FROM vets WHERE last_name LIKE ?";
            int count = jdbcTemplate.queryForObject(countSql, new Object[]{lastNameBase + "%"}, Integer.class);

            // If count is greater than 0, append the count to the last name
            String lastName = count > 0 ? lastNameBase + (count + 1) : lastNameBase;

            String sql = String.format("INSERT INTO vets (first_name, last_name) VALUES ('%s', '%s');",
                firstName, lastName);
            jdbcTemplate.execute(sql);
        }
    }
}
